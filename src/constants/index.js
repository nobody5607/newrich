// Login Page
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = 'E_PICKER_CANCELLED'
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR'
export const E_PERMISSION_MISSING = 'E_PERMISSION_MISSING'
export const E_PICKER_NO_CAMERA_PERMISSION = 'E_PICKER_NO_CAMERA_PERMISSION'
export const E_USER_CANCELLED = 'E_USER_CANCELLED'
export const E_UNKNOWN = 'E_UNKNOWN'
export const E_DEVELOPER_ERROR = 'E_DEVELOPER_ERROR'
export const TIMEOUT_NETWORK = 'ECONNABORTED' // request service timeout
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK' 

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.' 
export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.'  
export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.' 


// Speciment Page
export const SPECIMENT_FETCHING = 'SPECIMENT_FETCHING';
export const SPECIMENT_SUCCESS = 'SPECIMENT_SUCCESS';
export const SPECIMENT_FAILED = 'SPECIMENT_FAILED';


// Member Page
export const MEMBER_FETCHING = 'MEMBER_FETCHING';
export const MEMBER_SUCCESS = 'MEMBER_SUCCESS';
export const MEMBER_FAILED = 'MEMBER_FAILED';

export const AMEMBER_FETCHING = 'AMEMBER_FETCHING';
export const AMEMBER_SUCCESS = 'AMEMBER_SUCCESS';
export const AMEMBER_FAILED = 'AMEMBER_FAILED';



// Profile Page
export const PROFILE_FETCHING = 'PROFILE_FETCHING';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILED = 'PROFILE_FAILED';

// Profile Page
export const UPDATE_PROFILE_FETCHING = 'UPDATE_PROFILE_FETCHING';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED';


// Order Page
export const ORDER_FETCHING = 'ORDER_FETCHING';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';


// INCOME Page
export const INCOME_FETCHING = 'INCOME_FETCHING';
export const INCOME_SUCCESS = 'INCOME_SUCCESS';
export const INCOME_FAILED = 'INCOME_FAILED';


//modal 
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';


// export const apiUrl =  "http://newrich.local/api";
export const apiUrl =  "https://newrich.bloodcloud.online/api";
export const itoplusUrl = "https://www.alfoodsmarket.com/";
export const mainUrl = "https://newrich.kookainoy.com/";
export const facebookSharedUrl = "https://www.facebook.com/sharer/sharer.php?u=";


export const imageUrl = apiUrl;


export const server = {
    GetMemberUrl:'member/get-member',

    LOGIN_URL : `auth/login`,
    LOGINSOCIAL_URL : `auth/social-login`,
    MEMBER_URL:`member`,
    MEMBERBYTYPE_URL:`member/get-member-by-type`,
    MEMBERBYID_URL:`member/get-member-by-id`,
    REGISTER_URL : `auth/register`,
    PRODUCT_URL : `product`,    
    TRANSACTION_URL : `transaction`,    
    PROFILE_URL: `auth/get-profile`,
    MYPROFILE_URL: `auth/my-profile`,
    UPDATEMYPROFILE_URL: `auth/update-my-profile`,
    CHANGEPASSWORD_URL: `auth/change-password`,
    ORDERDETAIL_URL: `member/get-order-detail`,

    INCOME_URL: 'order',
    TOKEN_KEY : `token`,
}
