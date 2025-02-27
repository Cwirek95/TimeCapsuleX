using TimeCapsuleX.Common.Core.UnitTests.Fakes;

namespace TimeCapsuleX.Common.Core.UnitTests;

public class BusinessRuleValidationTests
{
    [Fact]
    public void Validate_ShouldNotThrowException_WhenRuleIsMet()
    {
        // Arrange
        var rule = new FakeValidRule();

        // Act
        Action act = () => BusinessRuleValidator.Validate(rule);

        // Assert
        act.Should().NotThrow();
    }

    [Fact]
    public void Validate_ShouldThrowBusinessRuleValidationException_WhenRuleIsNotMet()
    {
        // Arrange
        var errorMessage = "Rule is not met";
        var rule = new FakeInvalidRule(errorMessage);

        // Act
        Action act = () => BusinessRuleValidator.Validate(rule);

        // Assert
        act.Should().Throw<BusinessRuleValidationException>()
            .WithMessage(errorMessage);
    }
}
