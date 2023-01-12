exports.AddUser = (userInfo, users)=>{
    !users.some(user=>   user.userId === userInfo.userId) && users.push(userInfo)
    return users;
}

exports.RemoveUser = (socketId, users)=>{
    return users.filter(user=> user.socketId !== socketId);
}
exports.GetUser = (userId, users)=>{
    return users.find(user=> user.userId === userId)
}