import React, { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";
import Colors from "../theme/Colors";
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    /********************************/
    /* styles for html tags */
    a: {
      fontWeight: "bold",
      color: Colors.black,
    },
    div: {
      fontFamily: "monospace",
    },
    p: {
      fontSize: 30,
    },
    /*******************************/
    container: {
      display: 'flex',
      backgroundColor: "#F5FCFF",
    },
    editor: {
      backgroundColor: Colors.black,
      borderColor: Colors.black,
      borderWidth: 1,
    },
    rich: {
      minHeight: 300,
      flex: 1,
    },
    richBar: {
      height: 70,
      backgroundColor: "#F5FCFF",
    },
    text: {
      fontWeight: "bold",
      fontSize: 20,
    },
    tib: {
      textAlign: "center",
      color: "#515156",
    },
  });

function TextEditor() {
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        "Toolbar click, selected items (insert end callback):",
        items
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }

  const htmlText = 
  `<html>
    <head>
      <title>Href Attribute Example</title>
    </head>
    <body>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>
      <p>
        <u><a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a></u> shows you how and where you can contribute to freeCodeCamp's community and growth.
        <h1>Company A</h1>
        <p>The ol element defines an ordered list:</p>
        <ol>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>

        <p>The ul element defines an unordered list:</p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

        <p>To force<br> line breaks<br> in a text,<br> use the br<br> element.</p>
        <p class="MsoNormal">
         <i>&#8220;It is very important to keep your asthma under control. This often requires the use of an inhaled corticosteroid (also called a maintenance or long-term control medicine) that you take every day, and sometimes oral steroids like prednisone. Steroids are not a risk for people with asthma, so continue to take your medications as prescribed.&#8221;</i>
        </p>
        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/sunlit-birds.png?q=50&fit=crop&w=750&dpr=1.5" width="400" height="300" />
      </p>

    </body>
  </html>`

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.text}>Editor</Text> */}
      {/* <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Start Writing Here"}
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
      /> */}
      {/* <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={Colors.silverDark}
        selectedIconTint={Colors.skyBlue}
        disabledIconTint={Colors.silver}
        onPressAddImage={onPressAddImage}
        iconSize={30}
        actions={[
          "insertVideo",
          ...defaultActions,
          actions.setStrikethrough,
          actions.heading1,
        ]}
        // map icons for self made actions
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
          ),
          [actions.setStrikethrough]: ({}) => 
            <Icon name="strikethrough-s" color={Colors.silverDark} size={30} />,
          ["insertVideo"]:({}) => 
            <Icon name="videocam" color={Colors.silverDark} size={30} />,
        }}
        insertVideo={insertVideo}
      /> */}
      {/* <Text style={styles.text}>Result</Text> */}
      <HTMLView value={htmlText} stylesheet={styles} />
    </ScrollView>
  );
};

export default TextEditor;