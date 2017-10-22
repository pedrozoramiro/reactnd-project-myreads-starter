
import * as ArrayUtils from "../../utils/ArrayUtils";

it("Should merge property", () => {
    const targetArray = [{id:'1',name:'name1'},{id:'2',name:'name2'}] 
    const mergeArray = [{id:'1',name:'merged1'}] 
    const  merged = ArrayUtils.mergeByProperty(targetArray,mergeArray,'id');
    expect(merged).toMatchSnapshot();
  });

  it("Should add new item ", () => {
    const targetArray = [{id:'1',name:'name1'},{id:'2',name:'name2'}] 
    const mergeArray = [{id:'3',name:'name3'}] 
    const  merged = ArrayUtils.mergeByProperty(targetArray,mergeArray,'id');
    expect(merged).toMatchSnapshot();
  });