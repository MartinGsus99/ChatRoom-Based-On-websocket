const buf=Buffer.from('hello world','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

//创建长度为10字节的Buffer实例
const buf1=Buffer.alloc(10);
//创建长度为10字节，且用0填充的Buffer实例
const buf2=Buffer.alloc(10,1);
//创建长度为10字节，且未初始化的Buffer实例
const buf3=Buffer.allocUnsafe(10);
//创建一个包含[0x1,0x2,0x3]的Buffer实例
const buf4=Buffer.from([1,2,3]);
//创建一个包含UTF-8字节[0x74,0x65,0x73,0x74]的Buffer实例
const buf5=Buffer.from('test');
//创建一个包含Latin-1字节[0x74,0x65,0x73,0x74]的Buffer实例
const buf6=Buffer.from('test','latin1');

buf.write('hello world');
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf.toString('base64'));
//缓冲区合并
const buffer1=Buffer.from(('菜鸟教程'));
const buffer2=Buffer.from(('www.runoob.com'));
const buffer3=Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: "+buffer3.toString());
//缓冲区比较
const buffer4=Buffer.from('ABC');
const buffer5=Buffer.from('ABCD');
const result=buffer4.compare(buffer5);
if(result<0){
    console.log(buffer4+"在"+buffer5+"之前");
}else if(result==0){
    console.log(buffer4+"与"+buffer5+"相同");
}else{
    console.log(buffer4+"在"+buffer5+"之后");
}
//拷贝缓冲区
const buffer6=Buffer.from('ABC');
//拷贝一个缓冲区
const buffer7=Buffer.alloc(3);
buffer6.copy(buffer7);
console.log("buffer7 content: "+buffer7.toString());
//缓冲区裁剪
const buffer8=Buffer.from('runoob');
//剪切缓冲区
const buffer9=buffer8.slice(0,2);
console.log("buffer9 content: "+buffer9.toString());