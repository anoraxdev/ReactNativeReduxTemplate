import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner, Header} from '../common';
import {Actions} from 'react-native-router-flux';
import {emailChanged, passwordChanged, loginUser} from '../../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }

  loginUser() {
    console.log('login');
  }

  goToRegister() {
    console.log('register');
    this.props.navigation.navigate('Register');
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.loginUser.bind(this)}>ENTRAR</Button>;
  }

  render() {
    return (
      <View>
        <Header />
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          <CardSection>{this.renderButton()}</CardSection>
          <Text
            style={styles.registerTextStyle}
            onPress={this.goToRegister.bind(this)}>
            Register
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  registerTextStyle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    color: '#E94E1B',
  },
};

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {email, password, error, loading};
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
  },
)(LoginForm);
