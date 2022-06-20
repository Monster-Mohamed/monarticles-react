/**
 * AppURL v1.0
 * this class is programmed for the api routes or links
 * you can type any api name in this class and import anywhere
 */

class AppURL {
  // your domain name
  static Base = "https://monster-articles-app.herokuapp.com";
  // the api name
  static BaseURL = `${this.Base}/api`;

  /**
   * CompileURL() v1
   * @param methodName The Name of the method or page after the domain {BaseURL}
   * @returns Full URL Domain + your page or method or url
   */
  static CompileURL = (methodName: string) => `${AppURL.BaseURL}/${methodName}`;

  // the api properties
  static AddArtURL = AppURL.CompileURL("article");
  static AllArtsURL = AppURL.CompileURL("articles");
  static ArticleURL = AppURL.CompileURL("article");
}

export default AppURL;
