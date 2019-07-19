import React, { Component } from 'react';
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import axios from "axios";


var firebaseConfig = {
  apiKey: "AIzaSyCQhjgNheeYmynWpfIS7gL6IQUTUTCR7VI",
  authDomain: "test-lanacion-3a57b.firebaseapp.com",
  databaseURL: "https://test-lanacion-3a57b.firebaseio.com",
  projectId: "test-lanacion-3a57b",
  storageBucket: "test-lanacion-3a57b.appspot.com",
  messagingSenderId: "291796130526",
  appId: "1:291796130526:web:1092f04ff7e0fbd2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: null,
      fetched: false,
    };
  }


  getInfoFromInstagram = (item) => {
    console.log("recibo data", item)
    return axios.get(`https://instagram.com/${item}`)
  }

  profileBuilder = (profileArray) => {
    console.log("profileBuilder1", profileArray);

    let test = profileArray;


    Object.keys(profileArray).map((item) => {
      console.log("adentro map", profileArray);
      let json = profileArray[item];
      json = json.split("window._sharedData = ");
      json = json[1].split("</script>");
      json = json[0];
      json = json.substr(0, json.length - 1);
      json = JSON.parse(json);
      json = json.entry_data.ProfilePage[0].graphql.user;
      console.log(json);
    });
  }

  async componentDidMount() {
    var db = firebase.firestore();
    var docRef = db.collection("villanos").doc("instagrams");
    const doc = await docRef.get()

    //una vez que tengo todos los usuarios llamo a la funcion que baja la informacion de instagram.
    let profileArray = [];

    if (doc.exists) {
      const data = doc.data();
      //IMPORTANTE: async dentro de la funcion map
      await Object.keys(data).map(async (item, key) => {
        profileArray.push(await this.getInfoFromInstagram(data[item]))
      });
      console.log("profile array", profileArray)
    }
  }

  render() {
    const { fetched, memberList } = this.state;
    let contenido;

    console.log("fetched", fetched)
    console.log("memberlist", memberList)

    if (fetched) {
      contenido = Object.keys(memberList).map((item, key) => {
        return (
          <p key={key}>{memberList[item]}</p>
        )
      });
    } else {
      contenido = <p>Loading...</p>
    }
    return (
      <div>
        esta es una pagina
        {contenido}
      </div>
    )
  }
}

export default App;
