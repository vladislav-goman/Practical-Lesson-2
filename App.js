import React, { useState } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";

import { StudentInput, StateToggleButton } from "./components";

export default function App() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text> Practical Lesson 2. Variants of student forms.</Text>
      <StateToggleButton title="Variant 1" callback={setFirstModal} />
      <StateToggleButton title="Variant 2" callback={setSecondModal} />
      <StateToggleButton title="Variant 3" callback={setThirdModal} />

      <Modal visible={firstModal} animationType="fade">
        <View style={{...styles.container, ...styles.firstModal}}>
          <StudentInput fieldTitle="name" />
          <StudentInput fieldTitle="surname" />
          <StudentInput fieldTitle="patronymic" />
          <StudentInput fieldTitle="group number" />
          <StudentInput fieldTitle="faculty" />
          <StateToggleButton title="back" callback={setFirstModal} toClose />
        </View>
      </Modal>

      <Modal visible={secondModal} animationType="fade">
        <View style={{...styles.container, ...styles.secondModal}}>
          <StudentInput fieldTitle="name" />
          <StudentInput fieldTitle="surname" />
          <StudentInput fieldTitle="patronymic" />
          <StudentInput fieldTitle="group number" />
          <StudentInput fieldTitle="faculty" />
          <StateToggleButton title="back" callback={setSecondModal} toClose />
        </View>
      </Modal>

      <Modal visible={thirdModal} animationType="fade">
        <View style={{...styles.container, ...styles.thirdModal}}>
          <StudentInput fieldTitle="name" />
          <StudentInput fieldTitle="surname" />
          <StudentInput fieldTitle="patronymic" />
          <StudentInput fieldTitle="group number" />
          <StudentInput fieldTitle="faculty" />
        </View>
          <StateToggleButton title="back" callback={setThirdModal} toClose />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  firstModal: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  secondModal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  thirdModal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around"
  }
});
