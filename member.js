function skillsMember() {}
skillsMember.prototype = Object.create(skills.prototype);
skillsMember.prototype.constructor = skillsMember;
skillsMember.prototype.getSkills = function() {
    console.log(this.skills);
};