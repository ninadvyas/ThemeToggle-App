import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
    console.log(`Theme changed to ${isDarkMode ? 'Light' : 'Dark'}`);
  };

  const handleLogin = () => {
    console.log('Login pressed');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.text, isDarkMode ? styles.lightText : styles.darkText]}>
        Theme: {isDarkMode ? 'Dark' : 'Light'}
      </Text>
      <View style={styles.loginForm}>
        <TextInput
          style={[styles.input, isDarkMode ? styles.lightInput : styles.darkInput]}
          placeholderTextColor={isDarkMode ? '#999999' : '#777777'}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={[styles.input, isDarkMode ? styles.lightInput : styles.darkInput]}
          placeholderTextColor={isDarkMode ? '#999999' : '#777777'}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Switch
        style={styles.toggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  lightText: {
    color: '#00FFAB',
  },
  darkText: {
    color: '#FF0000',
  },
  loginForm: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  lightInput: {
    color: '#000000',
  },
  darkInput: {
    color: '#ffffff',
  },
  loginButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  toggle: {
    transform: [{ scale: 1.5 }],
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ThemeToggle;
