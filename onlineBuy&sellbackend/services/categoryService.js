const Category = require("../models/CategoryModel");

module.exports.addCategory = function(newCategory){
    console.log(newCategory)
    let{
        cname,
        
        ccode,
       
    } = newCategory;
    return Category.create({cname,
      
        ccode,
        })
        .then(res=>{Response={
            code:0,
            message:'',
            result:res

        }
        return Response;})

        .catch(err =>{Response={
            code:1,
            message:err.original.sqlMessage,
            result:null}
        return Response     
        })

}

module.exports.updateCategory = function(Category,id){
    let{
        cname,
        ccode,
    } = Category;
    return Category.update({cname,
        ccode},{where:{id:id}})
        .then(res=>{Response={
            code:0,
            message:'',
            result:res

        }
        return Response;})

        .catch(err =>{Response={
            code:1,
            message:err.original.sqlMessage,
            result:null}
        return Response
        })

}
module.exports.getAllCategorys = function(){
    return Category.findAll().then(res=>{Response={
        code:0,
        message:'',
        result:res

    }
    return Response;})

        .catch(err =>{Response={
            code:1,
            message:err.original.sqlMessage,
            result:null
    
        }
        return Response;})
}

module.exports.deleteCategory = function(id){
    return Category.destroy({
        where:{id:id},
    }).then(res=>{
        Response={
            code:0,
            message:'',
            result:res

        }
        return Response;
    })
    .catch(err =>{Response={
        code:1,
        message:err,
        result:null

    }
    return Response;})
}

module.exports.getCategorybyId = function(id){
    return Category.findOne({
        where:{id:id},
        raw:true
    }).then(res=>{
        Response={
            code:0,
            message:'',
            result:res

        }
        return Response;
    })
    .catch(err =>{Response={
        code:1,
        message:err,
        result:null

    }
    return Response;})
}