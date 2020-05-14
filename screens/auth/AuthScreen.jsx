import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { connect } from "react-redux";

// eslint-disable-next-line react/prefer-stateless-function
class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setPassword = (password) => this.setState({ password });
  setUsername = (username) => this.setState({ username });

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
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
        <Button icon="login" mode="contained" onPress={() => navigate("Links")}>
          Login
        </Button>
      </View>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
// Redux Store --> Component
const mapStateToProps = (state) => ({
  // geolocation: state.geolocationReducer.geolocation,
  // isGeolocationPermissionRequested: state.geolocationReducer.isGeolocationPermissionRequested,
  // geolocationPermissionStatus: state.geolocationReducer.geolocationPermissionStatus,
});

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers
// Then Modify The Data And Assign It To Your Props)
// Action
const mapDispatchToProps = (dispatch) => ({
  // Store geolocaction
  // getGeolocationPermissionStatus: () => dispatch(getGeolocationPermissionStatus()),
  // requestGeolocationPermission: () => dispatch(requestGeolocationPermission()),
  // getGeolocation: () => dispatch(getGeolocation()),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
