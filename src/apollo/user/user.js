import { gql } from "@apollo/client";


export const QL_GETUSER = gql`
	query getUser {
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

export const QL_LOGIN = gql`
	query login($user_id : String! , $user_pw : String!) {
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
