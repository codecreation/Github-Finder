class GitHub {
  constructor() {
    this.client_id = 'db8df3211a052342da5c';
    this.client_secret = '323eb5d6b53c3ad0a2eb2f562bf5d22db7296771';


  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profileData = await profileResponse.json();
    return{
      profile: profileData
    }

  }
}
