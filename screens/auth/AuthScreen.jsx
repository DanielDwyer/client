import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Button,
  TextInput,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { connect } from "react-redux";

// Imports: Redux Actions
import { signUp, loginNew } from '../../redux/actions/authActions';

// eslint-disable-next-line react/prefer-stateless-function
class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: true, // local to component
      isLoading: false,
    };
  }

  setPassword = (password) => this.setState({ password });
  setUsername = (username) => this.setState({ username });
  toggleShowSignUp = () =>
    this.setState({ showSignUp: !this.state.showSignUp });
  handleSignUp = (username, password) => {
    this.setState({ isLoading: true });
    this.props.signUpRedux(username, password);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoggedIn === true && this.state.isLoading === true) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { username, password, showSignUp, isLoading, isLoggedIn } = this.state;
    const { loginRedux } = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          animating={isLoading}
          color={Colors.blue}
          hidesWhenStopped
        />
        <TextInput
          mode="outlined"
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={this.setUsername}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={this.setPassword}
          secureTextEntry
        />
        {showSignUp ? (
          <Button
            icon="login"
            mode="contained"
            onPress={() => this.handleSignUp(username, password)}
          >
            Sign Up
          </Button>
        ) : (
          <Button
            icon="login"
            mode="contained"
            onPress={() => loginRedux(username, password)}
          >
            Login
          </Button>
        )}
        <TouchableOpacity onPress={() => this.toggleShowSignUp()}>
          {showSignUp ? (
            <Text style={styles.toggleLoginSignupText}>
              Don't have an account yet? Sign Up
            </Text>
          ) : (
            <Text style={styles.toggleLoginSignupText}>
              Already have an account? Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
// Redux Store --> Component
const mapStateToProps = (state) => ({
  username: state.authReducer.username,
  password: state.authReducer.password,
  isLoggedIn: state.authReducer.isLoggedIn,
});

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers
// Then Modify The Data And Assign It To Your Props)
// Action
const mapDispatchToProps = (dispatch) => ({
  signUpRedux: (username, password) => dispatch(signUp(username, password)),  
  loginRedux: (username, password) => dispatch(loginNew(username, password)),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toggleLoginSignupText: {
    color: 'green',
  },
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
