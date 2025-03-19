import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Login to your account</Text>
        <Text style={styles.subHeader}>Don't have an account? Sign up</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="name@gmail.com"
          placeholderTextColor="gray"
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholder=""
        />
      </View>
      <View style={styles.loginOptionsContainer}>
        <View>
          <Text>Remember Me</Text>
        </View>
        <Text>Forgot Password?</Text>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            pressed ? styles.buttonPressed : styles.button,
          ]}
          onPress={() => console.log("pressed")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
