using TimeCapsuleX.TimeBased.Core.BusinessRules;

namespace TimeCapsuleX.TimeBased.Core.UnitTests;

public class TimeBasedCapsuleBusinessRulesTests
{
    [Fact]
    public void CapsuleCannotBeOpenedBeforeOpeningDate_ShouldPass_WhenOccurrenceDateIsAfterOpeningDate()
    {
        // Arrange
        var rule = new CapsuleCannotBeOpenedBeforeOpeningDateRule(
            openingDate: DateTimeOffset.UtcNow,
            occurrenceDate: DateTimeOffset.UtcNow.AddHours(1));

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeTrue();
    }

    [Fact]
    public void CapsuleCannotBeOpenedBeforeOpeningDate_ShouldFail_WhenOccurrenceDateIsBeforeOpeningDate()
    {
        // Arrange
        var rule = new CapsuleCannotBeOpenedBeforeOpeningDateRule(
            openingDate: DateTimeOffset.UtcNow.AddHours(1),
            occurrenceDate: DateTimeOffset.UtcNow);

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeFalse();
    }

    [Fact]
    public void CapsuleCannotBeWithoutItsContents_ShouldPass_WhenTitleAndMessageArePresent()
    {
        // Arrange
        var rule = new CapsuleCannotBeWithoutItsContentsRule("Title", "Message");

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeTrue();
    }

    [Theory]
    [InlineData(null, "Message")]
    [InlineData("Title", null)]
    [InlineData(null, null)]
    public void CapsuleCannotBeWithoutItsContents_ShouldFail_WhenTitleOrMessageAreMissing(string? title, string? message)
    {
        // Arrange
        var rule = new CapsuleCannotBeWithoutItsContentsRule(title, message);

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeFalse();
    }

    [Fact]
    public void CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDate_ShouldPass_WhenOpeningDateIsMoreThan24HoursLater()
    {
        // Arrange
        var rule = new CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDateRule(
            openingDate: DateTimeOffset.UtcNow.AddDays(2),
            creationDate: DateTimeOffset.UtcNow);

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeTrue();
    }

    [Fact]
    public void CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDate_ShouldFail_WhenOpeningDateIsLessThan24HoursLater()
    {
        // Arrange
        var rule = new CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDateRule(
            openingDate: DateTimeOffset.UtcNow.AddHours(12),
            creationDate: DateTimeOffset.UtcNow);

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeFalse();
    }

    [Fact]
    public void OnlyUnopenedCapsuleCanBeOpened_ShouldPass_WhenCapsuleIsNotOpened()
    {
        // Arrange
        var rule = new OnlyUnopenedCapsuleCanBeOpenedRule(false);

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeTrue();
    }

    [Fact]
    public void OnlyUnopenedCapsuleCanBeOpened_ShouldFail_WhenCapsuleIsAlreadyOpened()
    {
        // Arrange
        var rule = new OnlyUnopenedCapsuleCanBeOpenedRule(true);

        // Act
        var result = rule.IsMet();

        // Assert
        result.Should().BeFalse();
    }
}
