class loginPage
{
    constructor(page)
    {
        this.page=page
        this.userName="//div/h1[contains(text(),'Unlimited')]/../following-sibling::div/div/div/form/div/div/label[text()='Email address']"
        this.submit="//div/h1[contains(text(),'Unlimited')]/../following-sibling::div/div/div/form/div/div/following-sibling::button[text()='Get Started']"
    }
    async loginPage()
    {
        await this.page.fill(this.userName,"shristi.vats01@gmail.com");
        await this.page.click(this.submit);
        await this.page.waitForTimeout(5000);
        // const text= this.page.locator("").textContent();
        // console.log(text);
    }
   
}
module.exports=loginPage;