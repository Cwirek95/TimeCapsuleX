using TimeCapsuleX.Common.Core;
using TimeCapsuleX.TimeBased.Core.BusinessRules;

namespace TimeCapsuleX.TimeBased.Core;

public sealed class TimeBasedCapsule
{
    public Guid Id { get; init; }

    public Guid CreatorId { get; init; }
    public Guid RecipientId { get; init; }
    
    public DateTimeOffset OpeningDate { get; init; }
    public string Title { get; init; }
    public string Message { get; init; }
    
    public DateTimeOffset CreatedAt { get; init; }
    public DateTimeOffset? OpenedAt { get; private set; }
    
    public bool IsOpened => OpenedAt.HasValue;
    
    
    private TimeBasedCapsule(Guid id, Guid creatorId, Guid recipientId, DateTimeOffset openingDate,
        string title, string message, DateTimeOffset createdAt)
    {
        Id = id;
        CreatorId = creatorId;
        RecipientId = recipientId;
        OpeningDate = openingDate;
        Title = title;
        Message = message;
        CreatedAt = createdAt;
    }

    public static TimeBasedCapsule Create(Guid creatorId, Guid recipientId, DateTimeOffset openingDate,
        string title, string message, DateTimeOffset creationDate)
    {
        BusinessRuleValidator.Validate(new CapsuleCannotBeWithoutItsContentsRule(title, message));
        BusinessRuleValidator.Validate(new CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDateRule(openingDate, creationDate));

        return new TimeBasedCapsule(
            Guid.NewGuid(),
            creatorId,
            recipientId,
            openingDate,
            title,
            message,
            creationDate);
    }

    public void Open(DateTimeOffset occurrenceDate)
    {
        BusinessRuleValidator.Validate(new OnlyUnopenedCapsuleCanBeOpenedRule(IsOpened));
        BusinessRuleValidator.Validate(new CapsuleCannotBeOpenedBeforeOpeningDateRule(OpeningDate, occurrenceDate));

        OpenedAt = occurrenceDate;
    }
}
