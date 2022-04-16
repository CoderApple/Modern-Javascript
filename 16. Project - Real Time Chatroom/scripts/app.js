// dom queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');


chatroom.getChats(data =>{
    chatUI.render(data);
});