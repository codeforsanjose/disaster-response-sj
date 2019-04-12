const posts_db_name = process.env.NODE_ENV
    ? 'disasters'
    : 'test_disasters';

const users_db_name = process.env.NODE_ENV
    ? 'users'
    : 'test_users';

export {
    posts_db_name,
    users_db_name,
}