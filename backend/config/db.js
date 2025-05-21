export const ConnectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error('Error: ${error.message}');
        process.exit(1);//1 means exit with a fail
    }
}

//test github