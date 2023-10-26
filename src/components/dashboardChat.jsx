import React, { useState } from "react";
import {
  FaCaretDown,
  FaSearch,
  FaTrashAlt,
  FaCheckSquare,
  FaSquare,
} from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { TbRefresh } from "react-icons/tb";

function DashboardChat() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [messageBoxCheckboxes, setMessageBoxCheckboxes] = useState([
    false,
    false,
    false,
  ]);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: State for search query
  const [messages, setMessages] = useState([
    // Step 4: Separate list of messages
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    "Hello, how are you?",
    "This is a sample message",
  ]);

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
    setMessageBoxCheckboxes(
      Array(messageBoxCheckboxes.length).fill(!selectAllChecked)
    );
  };

  const handleMessageCheckBoxChange = (index) => {
    const updatedCheckboxes = [...messageBoxCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setMessageBoxCheckboxes(updatedCheckboxes);
    setSelectAllChecked(updatedCheckboxes.every((isChecked) => isChecked));
  };

  // Step 2: Event handler for search input field
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    filterMessages(event.target.value); // Step 3: Filter messages when search query changes
  };

  // Step 3: Filter messages based on search query
  const filterMessages = (query) => {
    const filtered = messages.filter((message) =>
      message.toLowerCase().includes(query.toLowerCase())
    );
    setMessageBoxCheckboxes(Array(filtered.length).fill(false));
    setMessages(filtered);
  };

  return (
    <main className="admin-chat" style={{ marginLeft: "250px" }}>
      <div className="chat-app">
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-main-nav col-12">
              <div className="row">
                <div className="chat-inbox col-4">
                  <span className="chat-header-title">
                    inbox (<span className="inboxSize">2</span>)
                  </span>
                </div>
                <div className="chat-draft col-4">
                  <span className="chat-header-title">
                    draft (<span className="draftSize">12</span>)
                  </span>
                </div>
                <div className="chat-trash col-4">
                  <span className="chat-header-title">
                    trash (<span className="trashSize">4</span>)
                  </span>
                </div>
              </div>
            </div>
            <div className="chat-action-nav">
              <div className="row">
                <div className="select-chat-action col-2">
                  <span className="input-box no-icon">
                    <select className="form-input">
                      <option selected>Select</option>
                      <option>All</option>
                      <option>None</option>
                      <option>Read</option>
                      <option>Unread</option>
                    </select>
                    <span className="arrow">
                      <i>
                        <FaCaretDown />
                      </i>
                    </span>
                  </span>
                </div>
                <div className="activity-chat-action col-2">
                  <span className="input-box no-icon">
                    <select className="form-input">
                      <option selected>Action</option>
                      <option>Mark as Read</option>
                      <option>Delete All</option>
                      <option>Empty Inbox</option>
                      <option>Empty Draft</option>
                      <option>Empty Trash</option>
                    </select>
                    <span className="arrow">
                      <i>
                        <FaCaretDown />
                      </i>
                    </span>
                  </span>
                </div>

                <div className="search-chat-action col-6">
                  <form>
                    <span className="input-box no-arrow">
                      <span className="icon">
                        <FaSearch style={{ color: "#b2b2b2" }} />
                      </span>
                      <input
                        type="search"
                        className="form-input"
                        placeholder="Search message .."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                    </span>
                  </form>
                </div>
                <div className="other-chat-action col-2">
                  <span className="refresh-icon chat-act-btn">
                    <TbRefresh />
                  </span>
                  <span className="npbtn chat-act-btn">
                    <GrFormPrevious />
                  </span>
                  <span className="npbtn np2 chat-act-btn">
                    <GrFormNext />
                  </span>
                </div>
              </div>
            </div>
            <div className="chat-header-cta">
              <div className="chat-select-all checkbox-item">
                <input
                  type="checkbox"
                  name="select-all"
                  id="select-all"
                  value="select-all"
                  checked={selectAllChecked}
                  onChange={handleSelectAllChange}
                />
              </div>
              <div className="chat-delete-btn">
                <button className="chat-delete">delete</button>
              </div>
            </div>
          </div>
          <div className="chat-body">
            {messageBoxCheckboxes.map((isChecked, index) => (
              <div className="chat-msg-list" key={index}>
                <div className="message-box">
                  <div className="row">
                    <span className="select-msg-box col-1">
                      <input
                        type="checkbox"
                        name="select-msg"
                        id={`select-msg-${index}`}
                        value="select-msg"
                        checked={isChecked}
                        onChange={() => handleMessageCheckBoxChange(index)}
                      />
                    </span>
                    <span className="chat-user-name col-2">
                      <h4>Rich Parker</h4>
                    </span>
                    <span className="chat-user-msg col-6">
                      <p>{messages[index]}</p>
                    </span>
                    <span className="chat-msg-arrival-time col-2">
                      <p>13 Nov </p>
                    </span>
                    <span className="chat-msg-delete col-1">
                      <span className="icon delete-icon">
                        <FaTrashAlt />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="message-box">
                  <div className="row">
                    <span className="select-msg-box col-1">
                      <input
                        type="checkbox"
                        name="select-msg"
                        id={`select-msg-${index}`}
                        value="select-msg"
                        checked={isChecked}
                        onChange={() => handleMessageCheckBoxChange(index)}
                      />
                    </span>
                    <span className="chat-user-name col-2">
                      <h4>Rich Parker</h4>
                    </span>
                    <span className="chat-user-msg col-6">
                      <p>{messages[index]}</p>
                    </span>
                    <span className="chat-msg-arrival-time col-2">
                      <p>13 Nov </p>
                    </span>
                    <span className="chat-msg-delete col-1">
                      <span className="icon delete-icon">
                        <FaTrashAlt />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-footer"></div>
        </div>
      </div>
    </main>
  );
}

export default DashboardChat;
