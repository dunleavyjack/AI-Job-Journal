import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    paddingVertical: 10,
    marginVertical: 5,
  },
  header: {
    fontWeight: "bold",
    marginVertical: 5,
    fontSize: 25,
  },
  subHeader: {
    color: "gray",
  },
  inputContainer: {
    marginVertical: 5,
  },
  inputLabel: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  input: {
    color: "black",
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
  },
  loginOptionsContainer: {
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 7,
    marginVertical: 5,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  buttonPressed: {
    padding: 10,
    borderRadius: 7,
    marginVertical: 5,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    opacity: 0.8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
