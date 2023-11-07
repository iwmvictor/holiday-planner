import React, { useState, useEffect } from "react";
import axios from "axios";
import Notiflix from "notiflix";

import { FaTrashAlt, FaRegEye } from "react-icons/fa";

function DashboardChat() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [messageNumber, setMessageNumber] = useState([0]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  useEffect(() => {
    // Fetch messages from the API
    axios
      .get("https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/all")
      .then((response) => {
        setMessages(response.data); // Assuming the response is an array of messages
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching messages: ", error);
        setLoading(false);
      });
  }, []);

  const handleNewMessage = (newMessage) => {
    //when new msg added
    setMessageNumber(messageNumber + 1);

    //add new msg to msg array
    setMessages([...messages, newMessage]);
  };

  //handle delete message
  const handleConfirmDelete = async (message) => {
    try {
      const res = await axios.delete(
        `https://holiday-api-zj3a.onrender.com/api/v1/cont/contact/${message._id}`
      );

      if (res.status === 200) {
        Notiflix.Notify.info("Message deleted successfully");
        window.location.reload();
      } else {
        // Handle other status codes as needed
        Notiflix.Notify.failure("Failed to delete the message.");
      }
    } catch (error) {
      // Handle request or other errors
      console.log("Error:", error);
      Notiflix.Notify.failure("An error occurred while deleting the message.");
    }
  };

  const handleDeleteClick = (messages) => {
    setMessageToDelete(messages);
    handleConfirmDelete();
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <div className="circle outer">
            <div className="circle middle">
              <div className="circle inner">
                <div className="circle inniest"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="dashboard-main">
      <div className="dashboard-user-sec">
        <div className="container">
          <div className="contact-list">
            <div className="dashboard-contact">
              <div className="dashboard-contact-header">
                <div className="row header-contact">
                  <span className="contact-title">new messages</span>
                  <span className="contact-subtitle">
                    hello there!! your messages here
                  </span>
                </div>
              </div>

              <div className="dashboard-contact-body">
                <div className="contact-header contact-table">
                  <div className="row">
                    <span
                      style={{ flexBasis: "7%" }}
                      className="contact-id-title"
                    >
                      #id
                    </span>
                    <span
                      style={{ flexBasis: "12%" }}
                      className="contact-fullname-title"
                    >
                      fullname
                    </span>
                    <span
                      style={{ flexBasis: "19%" }}
                      className="contact-email-title"
                    >
                      email
                    </span>
                    <span
                      style={{ flexBasis: "13%" }}
                      className="contact-phone-title"
                    >
                      phone
                    </span>
                    <span
                      style={{ flexBasis: "13%" }}
                      className="contact-service-title"
                    >
                      service
                    </span>
                    <span
                      style={{ flexBasis: "25%" }}
                      className="contact-message-title"
                    >
                      message
                    </span>
                    <span
                      style={{ flexBasis: "10%" }}
                      className="contact-action-title"
                    >
                      action
                    </span>
                  </div>
                </div>
                <div className="contact-body contact-table">
                  {messages.map((message, index) => (
                    <div className="row contact-msg-content" key={index}>
                      <span style={{ flexBasis: "7%" }} className="contact-id">
                        {messageNumber + index}
                      </span>
                      <span
                        style={{ flexBasis: "12%" }}
                        className="contact-fullname"
                      >
                        {message.fullName || "[No Name]"}
                      </span>
                      <span
                        style={{ flexBasis: "19%" }}
                        className="contact-email"
                      >
                        {message.email || "[No Email]"}
                      </span>
                      <span
                        style={{ flexBasis: "13%" }}
                        className="contact-phone"
                      >
                        {message.phoneNumber || "[No Phone]"}
                      </span>
                      <span
                        style={{ flexBasis: "13%" }}
                        className="contact-service"
                      >
                        {message.service || "[No Service]"}
                      </span>
                      <span
                        style={{ flexBasis: "25%" }}
                        className="contact-message"
                      >
                        {message.message || "[No Message]"}
                      </span>
                      <span
                        style={{ flexBasis: "10%" }}
                        className="contact-action"
                      >
                        <button>
                          <FaRegEye />
                        </button>
                        <button
                          style={{ marginLeft: "5px" }}
                          onClick={() => handleConfirmDelete(message)}
                        >
                          <FaTrashAlt />
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardChat;
