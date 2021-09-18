export const getPosts = async (req,res) => {
    try{
       //something 
       res.status(200).json("Success")
    }catch(err){
        res.status(404).json({message: err.message});
    }
}