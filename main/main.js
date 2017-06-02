function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

var a=loadAllItems();


module.exports = function main(inputs) {
   
    var num=[];
    for(let k=0;k<a.length;k++)
    {
    	num[k]=0;
    }
    for(var i=0;i<inputs.length;i++)
    {
      for(var j=0;j<a.length;j++)
      {
        if(inputs[i]==a[j].barcode)
        {
        	num[j]++;
        }
      }
    }
    var txtt= '***<没钱赚商店>购物清单***\n' ;
    var summ=0;
    for(let k=0;k<a.length;k++)
    {
    	if(num[k]!==0)
    	{
            txtt=txtt+`名称：${a[k].name}，数量：${num[k]}${a[k].unit}，单价：${a[k].price.toFixed(2)}(元)，小计：${(a[k].price)*num[k]}(元)\n`;
            summ=summ+(a[k].price)*k;
    	}
    }
    txtt=txtt+'----------------------\n' +
            `总计：${summ}(元)\n` +
            '**********************';
  	return txtt;
};

