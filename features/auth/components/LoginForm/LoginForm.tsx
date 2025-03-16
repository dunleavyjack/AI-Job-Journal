import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login to your account</Text>
      <Text style={styles.subHeader}>Don't have an account? Sign up</Text>

      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="abc@gmail.com"
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder=""
      />
      <View>
        <TouchableOpacity></TouchableOpacity>
        <Text>Remember Me</Text>
        <Text>Forgot Password?</Text>
      </View>
    </View>
  );
}
