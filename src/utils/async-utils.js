/**
 * @class 
 * @description asynchronous uitility functions
 */
class AsyncUtils {
    /**
     * @description Only one call made if no event happens in wait time. 
     * @param { function } func calls, passed function after wait is done
     * @param { number } wait wait in millseconds
     * @return { function } retuns function every time an event is performed  
     */
    static debounce(func, wait){
        var timeOut;
        return function() {        
            clearTimeout(timeOut);
            timeOut = setTimeout(()=> {
                func.apply(this, arguments);
            }, wait, arguments);
            
        }
    }

    /**
     * @description Limits the total calls made in a given time
     * @param { function } fucn calls, passed function after wait is done
     * @param { function } wait wait in milliseconds
     * @returns { }
     */
    static throttle(func, wait) {
        var timeOut;
        return function() {
            if(!timeOut)
                timeOut = setTimeout(()=> {
                    func.apply(this, arguments);
                    timeOut = null;
                }, wait, arguments);
        }
    }
}

export default AsyncUtils;