// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bet {
    address public admin;
    address public personA;
    address public personB;
    uint256 public betAmount;
    bool public betClosed;
    bool public betOutcome; // true if personA wins, false if personB wins

    event BetStarted(address personA, address personB, uint256 betAmount);
    event BetClosed(bool outcome, address winner, address loser, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can call this function");
        _;
    }

    modifier onlyParticipants() {
        require(msg.sender == personA || msg.sender == personB, "Only participants can call this function");
        _;
    }

    modifier betNotClosed() {
        require(!betClosed, "The bet is already closed");
        _;
    }

    constructor(address _personA, address _personB, uint256 _betAmount) {
        admin = msg.sender;
        personA = _personA;
        personB = _personB;
        betAmount = _betAmount;
    }

    function startBet() external payable onlyParticipants betNotClosed {
        require(msg.value == betAmount, "Incorrect bet amount sent");
        emit BetStarted(personA, personB, betAmount);
    }

    function closeBet(bool _outcome) external onlyAdmin betNotClosed {
        betOutcome = _outcome;
        betClosed = true;

        address winner = betOutcome ? personA : personB;
        payable(winner).transfer(address(this).balance);

        emit BetClosed(betOutcome, winner, betOutcome ? personB : personA, betAmount);
    }
}
