export const Register_REQUEST = 'register/Register_REQUEST';
export const Register_SUCCESS = 'register/Register_SUCCESS';
export const Register_FAIL = 'register/Register_FAIL';

export function postRegister(values) {
    return {
        //如果不写三个，这里的type或报错，因为在中间件里定义了三个
        types: [Register_REQUEST, Register_SUCCESS, Register_FAIL],
        promise: client => client.post('/api/register',{data:values})
    };
}