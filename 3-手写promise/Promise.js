function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = []
    //保存实例对象的 this 的值
    const self = this;
    //resolve函数
    function resolve(data) {
        //判断状态
        if (self.PromiseState !== 'pending') return;
        //1.修改对象状态(promiseState)
        self.PromiseState = 'fulfilled';
        //2.设置对象结果值(promiseResult)
        self.PromiseResult = data;
        //调用成功的回调函数
        self.callbacks.forEach(item => {
            item.onResolved(data)
        })
    }
    //reject函数
    function reject(data) {
        //判断状态
        if (self.PromiseState !== 'pending') return;
        //1.修改对象状态(promiseState)
        self.PromiseState = 'rejected';
        //2.设置对象结果值(promiseResult)
        self.PromiseResult = data;
        //调用成功的回调函数
        self.callbacks.forEach(item => {
            item.onRejected(data)
        })
    }
    try {
        //同步调用【执行器函数】
        executor(resolve,reject);
    } catch (error) {
        //修改promise对象状态为【失败】
        reject(error); 
    }

}
//添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
    return new Promise((resolve, reject) => {
        //调用回调函数
        //因为P.then()   这里this指向实例对象P
        if (this.PromiseState === "fulfilled") {
            try {
                //获取回调函数的执行结果
                let result = onResolved(this.PromiseResult);
                //判断
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v)
                    }, r => {
                        reject(r)
                    });
                } else {
                    //结果的对象状态为【成功】
                    resolve(result);
                }    
            } catch (error) {
                reject(error)
            }
        }
        if (this.PromiseState === "rejected"){
            onRejected(this.PromiseResult);
        }
        if (this.PromiseState === 'pending') {
            //保存回调函数
            this.callbacks.push({
                onResolved: onResolved,
                onRejected: onRejected,
            });
            
        }
    })

}