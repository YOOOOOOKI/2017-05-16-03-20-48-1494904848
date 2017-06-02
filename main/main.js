const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
   
    var num=[];
    for(let k=0;k<loadAllItems.length;k++)
    {
    	num[k]=0;
    }
    for(var i=0;i<inputs.length;i++)
    {
      for(var j=0;j<loadAllItems.length;j++)
      {
        if(inputs[i]==loadAllItems[j].barcode)
        {
        	num[j]++;
        }
      }
    }
    var txtt= '***<没钱赚商店>购物清单***\n' ;
    var summ=0;
    for(let k=0;k<loadAllItems.length;k++)
    {
    	if(num[k]!==0)
    	{
            txtt=txtt+`名称：${loadAllItems[k].name}数量：${k}${loadAllItems[k].unit}，单价：${loadAllItems[k].price}(元)，小计：${(loadAllItems[k].price)*k}(元)\n`;
            summ=summ+(loadAllItems[k].price)*k;
    	}
    }
    txtt=txtt+'----------------------\n' +
            `总计：${summ}(元)\n` +
            '**********************';
  	return txtt;
};
