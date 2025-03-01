using Microsoft.Extensions.Time.Testing;
using TimeCapsuleX.Common.Core;

namespace TimeCapsuleX.TimeBased.Core.UnitTests;

public class TimeBasedCapsuleTests
{
    [Fact]
    public void Create_Should_CreateCapsule_When_ValidDataProvided()
    {
        // Arrange & Act
        var builder = new TimeBasedCapsuleBuilder();
        var capsule = builder.Build();

        // Assert
        capsule.Should().NotBeNull();
        capsule.Title.Should().Be("Default Title");
        capsule.Message.Should().Be("Default Message");
        capsule.IsOpened.Should().BeFalse();
        capsule.CreatedAt.Should().Be(builder.GetCreationTime());
        capsule.OpeningDate.Should().Be(builder.GetCreationTime().AddHours(24).AddSeconds(1));
    }

    [Fact]
    public void Create_Should_ThrowException_When_CapsuleHasNoTitle()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();

        // Act
        var act = () => builder
            .WithTitle("")
            .Build();

        // Assert
        act.Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Create_Should_ThrowException_When_CapsuleHasNoMessage()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();

        // Act
        var act = () => builder
            .WithMessage("")
            .Build();

        // Assert
        act.Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Create_Should_ThrowException_When_OpeningDateIsExactly24Hours()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var invalidOpeningDate = builder.GetCreationTime().AddHours(24);

        // Act
        var act = () => builder
            .WithOpeningDate(invalidOpeningDate)
            .Build();

        // Assert
        act.Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Create_Should_ThrowException_When_OpeningDateIsLessThan24Hours()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var invalidOpeningDate = builder.GetCreationTime().AddHours(23).AddMinutes(59);

        // Act
        var act = () => builder
            .WithOpeningDate(invalidOpeningDate)
            .Build();

        // Assert
        act.Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Open_Should_ThrowException_When_OpeningExactlyAt24Hours()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var capsule = builder.Build();
        var testTime = builder.GetCreationTime().AddHours(24);

        // Act & Assert
        FluentActions.Invoking(() => capsule.Open(testTime))
            .Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Open_Should_Succeed_When_Opening1SecondAfter24Hours()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var capsule = builder.Build();
        var testTime = builder.GetCreationTime().AddHours(24).AddSeconds(1);

        // Act
        capsule.Open(testTime);

        // Assert
        capsule.IsOpened.Should().BeTrue();
    }

    [Fact]
    public void Open_Should_ThrowException_When_CapsuleAlreadyOpened()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var capsule = builder
            .AlreadyPastOpeningDate()
            .Build();
        capsule.Open(builder.GetCurrentTime());

        // Act & Assert
        FluentActions.Invoking(() => capsule.Open(builder.GetCurrentTime()))
            .Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Open_Should_ThrowException_When_TryingToOpenBeforeOpeningDate()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var capsule = builder.Build();

        // Act & Assert
        FluentActions.Invoking(() => capsule.Open(builder.GetCurrentTime()))
            .Should().Throw<BusinessRuleValidationException>();
    }

    [Fact]
    public void Open_Should_SetOpenedAt_When_CapsuleCanBeOpened()
    {
        // Arrange
        var builder = new TimeBasedCapsuleBuilder();
        var capsule = builder
            .AlreadyPastOpeningDate()
            .Build();

        // Act
        capsule.Open(builder.GetCurrentTime());

        // Assert
        capsule.IsOpened.Should().BeTrue();
        capsule.OpenedAt.Should().Be(builder.GetCurrentTime());
        capsule.OpenedAt.Should().BeAfter(capsule.OpeningDate);
    }
}
