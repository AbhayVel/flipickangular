export class PopUpConfig {
  isShowPopup: boolean = false;
  header: string = '';
  isSave: boolean = true;
  isClose: boolean = true;
  isCrossIcon: boolean = true;
  isShowLeft: boolean = false;
  isShowButton: boolean = true;
}


export class PopUpConfigFactory {
  public static getPopUpConfig(config: any) {
    
    let pconf = new PopUpConfig();
    Object.assign(pconf, config);    
    return pconf;
  }
}
