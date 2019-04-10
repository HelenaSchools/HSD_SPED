(function(){
    hsdSpedAngular.factory('staffSettingService',['$http'],
        function($http){
            return{
                getCaseManagers:function(){
                    return $http.post('/ws/schema/query/org.helenaschools.district.casemanagers')
                        .then(function(result){
                            _.each(result.data,function(element){
                                
                            })
                        })
                }
            }
        })
})