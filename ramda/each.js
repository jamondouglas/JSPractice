function each(func, collection){
	if(Array.isArray(collection)){
		for(var i =0; i<collection.length;i++){
			func(collection[i],key,collection);
		}
	}else{
		for(var key in collection){
			func(collection[key],key, collection);
		}
	}
}