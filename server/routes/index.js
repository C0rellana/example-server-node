import middleware from '../middleware';

export default (app) => {
    app.get('/', middleware, (req, res) => res.json('Hello World!'));
};
