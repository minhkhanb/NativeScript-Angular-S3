export class DeviceInfo {
  constructor(
    public model: string,
    public deviceType: string,
    public os: string,
    public osVersion: string,
    public sdkVersion: string,
    public language: string,
    public manufacturer: string,
    public uuid: string
  ) {

  }
}