class user{
	constructor(id, username, name, bio, dateCreated, LastUpdated){
		this.id = id
		this.username = username 
		this.name = name
		this.bio = bio 
		this.dateCreated = new Date()
		this.LastUpdated = new Date()
	}
}

module.exports = user