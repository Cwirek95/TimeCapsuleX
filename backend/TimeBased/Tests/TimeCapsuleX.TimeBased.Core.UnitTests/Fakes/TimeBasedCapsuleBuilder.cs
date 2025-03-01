using Microsoft.Extensions.Time.Testing;

namespace TimeCapsuleX.TimeBased.Core.UnitTests;

public class TimeBasedCapsuleBuilder
{
    private readonly FakeTimeProvider _timeProvider;
    private Guid _creatorId = Guid.NewGuid();
    private Guid _recipientId = Guid.NewGuid();
    private DateTimeOffset _creationDate;
    private DateTimeOffset _openingDate;
    private string _title = "Default Title";
    private string _message = "Default Message";

    public TimeBasedCapsuleBuilder(FakeTimeProvider? timeProvider = null)
    {
        _timeProvider = timeProvider ?? new FakeTimeProvider();
        Reset();
    }

    private void Reset()
    {
        _timeProvider.SetUtcNow(new DateTimeOffset(2025, 1, 1, 12, 0, 0, TimeSpan.Zero));
        _creationDate = _timeProvider.GetUtcNow();
        _openingDate = _creationDate.AddHours(24).AddSeconds(1);
    }

    public TimeBasedCapsuleBuilder WithCreatorId(Guid creatorId)
    {
        _creatorId = creatorId;
        return this;
    }

    public TimeBasedCapsuleBuilder WithRecipientId(Guid recipientId)
    {
        _recipientId = recipientId;
        return this;
    }

    public TimeBasedCapsuleBuilder WithCreationDate(DateTimeOffset creationDate)
    {
        _creationDate = creationDate;
        return this;
    }

    public TimeBasedCapsuleBuilder WithOpeningDate(DateTimeOffset openingDate)
    {
        _openingDate = openingDate;
        return this;
    }
    
    public TimeBasedCapsuleBuilder AlreadyPastOpeningDate()
    {
        _timeProvider.SetUtcNow(_openingDate.AddSeconds(1));
        return this;
    }

    public TimeBasedCapsuleBuilder WithTitle(string title)
    {
        _title = title;
        return this;
    }

    public TimeBasedCapsuleBuilder WithMessage(string message)
    {
        _message = message;
        return this;
    }

    public TimeBasedCapsule Build()
    {
        return TimeBasedCapsule.Create(
            _creatorId,
            _recipientId,
            _openingDate,
            _title,
            _message,
            _creationDate);
    }

    public DateTimeOffset GetCurrentTime() => _timeProvider.GetUtcNow();
    public DateTimeOffset GetCreationTime() => _creationDate;
    public DateTimeOffset GetOpeningDate() => _openingDate;
}
