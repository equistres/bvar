import auth from './auth';

const db = auth.firestore();

const consumeCollection = async (collection) => {
    const querySnapshot = await db.collection(collection).get();
    
    let data = [];

    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    });
    if (data.length > 0) {
        if(collection==="villanos"){
            localStorage.setItem("users", JSON.stringify(data));
        }
        if(collection==="themes"){
            localStorage.setItem("themes", JSON.stringify(data));
        }
    }
    return data;
}

const consumeDocuments = async (collection, document) => {
    const querySnapshot = await db.collection(collection).doc(document).get();
    return querySnapshot;
}

const addUser = async (profile) => {
    let response;

    try {
        await db.collection("villanos").doc(profile.userName).set(profile)
        response = true
    } catch (error) {
        console.log(error)
        response = false
    }
    return response;
}

const deleteUser = async (user) => {
    let response;

    try {
        await db.collection("villanos").doc(user).delete()
        response = true
    } catch (error) {
        console.log(error)
        response = false
    }
    return response;
}

const addTheme = async (theme) => {
    let response;

    try {
        await db.collection("themes").doc(theme.description).set(theme)
        response = true
    } catch (error) {
        console.log(error)
        response = false
    }
    return response;
}


export default consumeCollection;
export { consumeDocuments, addUser, deleteUser, addTheme };
