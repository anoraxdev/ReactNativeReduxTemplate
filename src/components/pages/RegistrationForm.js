import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from '../common';
import {
  emailChanged,
  passwordChanged,
  usernameChanged,
  repeatPwdChanged,
  nameChanged,
  lastNameChanged,
  phoneChanged,
  websiteChanged,
  registerUser,
} from '../../actions';

class RegistrationForm extends Component {
  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }

  onUsernameChange(text) {
    console.log(text);
    this.props.usernameChanged(text);
  }

  onRepeatPwdChange(text) {
    console.log(text);
    this.props.repeatPwdChanged(text);
  }

  onNameChange(text) {
    console.log(text);
    this.props.nameChanged(text);
  }

  onLastNameChange(text) {
    console.log(text);
    this.props.lastNameChanged(text);
  }

  onPhoneChange(text) {
    console.log(text);
    this.props.phoneChanged(text);
  }

  onWebsiteChange(text) {
    console.log(text);
    this.props.websiteChanged(text);
  }

  registerUser() {
    console.log('register user');
  }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="User"
              placeholder="username"
              onChangeText={this.onUsernameChange.bind(this)}
              value={this.props.username}
            />
          </CardSection>
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
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Repeat password"
              placeholder="password"
              onChangeText={this.onRepeatPwdChange.bind(this)}
              value={this.props.repeatPassword}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Nombre"
              placeholder="nombre"
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.firstName}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Apellido"
              placeholder="apellido"
              onChangeText={this.onLastNameChange.bind(this)}
              value={this.props.lastName}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Telefono"
              placeholder="telefono"
              onChangeText={this.onPhoneChange.bind(this)}
              value={this.props.phone}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Sitio Web"
              placeholder="url"
              onChangeText={this.onWebsiteChange.bind(this)}
              value={this.props.website}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.registerUser.bind(this)}>Register</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({register}) => {
  const {
    email,
    password,
    error,
    loading,
    username,
    repeatPassword,
    firstName,
    lastName,
    phone,
    website,
    role,
  } = register;

  return {
    email,
    password,
    error,
    loading,
    username,
    repeatPassword,
    firstName,
    lastName,
    phone,
    website,
    role,
  };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    usernameChanged,
    repeatPwdChanged,
    nameChanged,
    lastNameChanged,
    phoneChanged,
    websiteChanged,
    registerUser,
  },
)(RegistrationForm);
