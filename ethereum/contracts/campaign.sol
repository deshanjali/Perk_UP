pragma solidity ^0.4.17;

contract CampaignFactory {
	address[] public deployedCampaigns;

	function createCampaign(uint minimum) public {
		address newCampaign = new Campaign(minimum, msg.sender);
		deployedCampaigns.push(newCampaign);
	}

	function getDeployedCampaigns() public view returns(address[]) {
		return deployedCampaigns;
	}
}

contract Campaign {
	struct Request {
		string description;
		uint value;
		address recipient;
		bool complete;
		uint countOfPeopleWhoSaidYes;
		mapping(address => bool) peopleWhoSaidYes;

	}

	Request[] public requests;
	address public manager;
	uint public minimumContribution;
	mapping(address => bool) public peopleWhoCanVote;
	uint public countOfPeopleWhoCanVote;

	modifier restricted() {
		require(msg.sender == manager);
		_;
	}

	function Campaign(uint minimum, address campaignCreator) public {
		manager = campaignCreator;
		minimumContribution = minimum;
	}

	function contribute() public payable {
		require(msg.value > minimumContribution);

		peopleWhoCanVote[msg.sender] = true;
		countOfPeopleWhoCanVote++;
	}

	function createRequest(string description, uint value, address recipient) public restricted {
		Request memory newRequest = Request({
			description: description,
			value: value,
			recipient: recipient,
			complete: false,
			countOfPeopleWhoSaidYes: 0
		});
		requests.push(newRequest);
	}

	function sayYesToTheRequest(uint index)public {
		Request storage request = requests[index];

		require(peopleWhoCanVote[msg.sender]);
		require(!request.peopleWhoSaidYes[msg.sender]);

		request.peopleWhoSaidYes[msg.sender] = true;
		request.countOfPeopleWhoSaidYes++;
	}

	function finalizeRequest(uint index) public restricted {
		Request storage request = requests[index];

		require(request.countOfPeopleWhoSaidYes > (countOfPeopleWhoCanVote/2));
		require(!request.complete);

		request.recipient.transfer(request.value);
		request.complete = true;
	}
}
