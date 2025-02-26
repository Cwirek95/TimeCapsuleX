using TimeCapsuleX.Common.Core;

namespace TimeCapsuleX.TimeBased.Core.BusinessRules;

internal sealed class CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDateRule : IBusinessRule
{
    private readonly DateTimeOffset _openingDate;
    private readonly DateTimeOffset _creationDate;

    internal CapsuleOpeningDateMustBeAtLeast24HoursLaterThanCreationDateRule(DateTimeOffset openingDate, DateTimeOffset creationDate)
    {
        _openingDate = openingDate;
        _creationDate = creationDate;
    }
    
    public bool IsMet()
    {
        var timeDifference = _openingDate - _creationDate;

        return timeDifference > TimeSpan.FromHours(24);
    }

    public string Error => "The date of opening of the capsule must be at least 24 hours later than the date of its creation.";
}
