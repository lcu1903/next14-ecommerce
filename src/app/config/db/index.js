import mongoose from 'mongoose';
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/next14-ecommerce');
        console.log('Connected');
    } catch (error) {
        console.log('failed');
    }
}
export { connect };
