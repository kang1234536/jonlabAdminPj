import { gql } from "@apollo/client";
 
const GetUser = gql`
query MyQuery {
    COM_USER_INFO {
      user_id
      user_nm
      user_phone
      user_no
      user_email
      user_pw
    }
  }
`;

const Login = gql`
query MyQuery($user_id : String! , $user_pw : String!) {
    COM_USER_INFO(where: {user_id: {_eq: $user_id }, user_pw: {_eq: $user_pw}}) {
      user_id
      user_nm
      user_phone
      user_no
      user_email
      user_pw
    }
  }
  `;

  export { Login, GetUser };