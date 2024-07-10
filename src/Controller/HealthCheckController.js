const healthCheck = async (req, res) => {
    // const filePath = './HLD_Global-Payment-Base.drawio';
    // res.download(filePath);
      res.status(200).send('To-Do application is Running');
    };
  
  export default healthCheck;