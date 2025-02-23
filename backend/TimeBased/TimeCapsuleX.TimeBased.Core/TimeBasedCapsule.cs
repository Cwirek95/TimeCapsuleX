using TimeCapsuleX.Common.Core;
using TimeCapsuleX.TimeBased.Core.BusinessRules;

namespace TimeCapsuleX.TimeBased.Core;

public sealed class TimeBasedCapsule
{
    public Guid Id { get; init; }

    public Guid UserId { get; init; }
    
    public DateTimeOffset OpeningDate { get; init; }
    
    public string Title { get; init; }
    
    public string Message { get; init; }
    
    public DateTimeOffset CreatedAt { get; init; }
    
    public DateTimeOffset? OpenedAt { get; private set; }
    
    public bool IsOpened => OpenedAt.HasValue;
    
    
    private TimeBasedCapsule(Guid id, Guid userId, DateTimeOffset openingDate, string title, string message, DateTimeOffset createdAt)
    {
        Id = id;
        UserId = userId;
        OpeningDate = openingDate;
        Title = title;
        Message = message;
        CreatedAt = createdAt;
    }

    public static TimeBasedCapsule Create(Guid userId, DateTimeOffset openingDate, string title, string message)
    {
        var creationDate = DateTimeOffset.UtcNow;
        
        BusinessRuleValidator.Validate(new CapsuleCannotBeWithoutItsContents(title, message));
        BusinessRuleValidator.Validate(new CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDate(openingDate, creationDate));

        return new TimeBasedCapsule(
            Guid.NewGuid(),
            userId,
            openingDate,
            title,
            message,
            creationDate);
    }
}
