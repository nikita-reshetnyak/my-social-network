export const updateObjectInArray = (userItems, objPropName, userId, newObjProps) => {
    return  userItems.map(u => {
        if (u[objPropName] === userId) {
           return { ...u, ...newObjProps }
        }
        return u;
     })
}