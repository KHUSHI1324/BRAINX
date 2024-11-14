// export const host='http://localhost:9000';
// console.log(host);
// export const sendMessageRoute=`${host}/messages/addmsg`;
// console.log(sendMessageRoute);
// export const getAllMessagesRoute=`${host}/messages/getmsg`;

export const host='http://localhost:9000';
console.log(host)
export const registerRoute= `${host}/api/auth/register`;
export const loginRoute= `${host}/api/auth/login`;
export const AvtarRoute= `${host}/api/auth/avtar`;
export const allUsersRoute=`${host}/api/auth/allusers`;
console.log(allUsersRoute);
export const sendMessageRoute=`${host}/api/messages/addmsg`;
export const getAllMessagesRoute=`${host}/api/messages/getmsg`;
export const imageapi=`${host}/api/messages/upload`;
console.log(imageapi);