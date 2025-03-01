using TimeCapsuleX.Common.Core;

namespace TimeCapsuleX.TimeBased.Core.BusinessRules;

internal sealed class CapsuleCannotBeOpenedBeforeOpeningDateRule : IBusinessRule
{
    private readonly DateTimeOffset _openingDate;
    private readonly DateTimeOffset _occurrenceDate;

    internal CapsuleCannotBeOpenedBeforeOpeningDateRule(DateTimeOffset openingDate, DateTimeOffset occurrenceDate)
    {
        _openingDate = openingDate;
        _occurrenceDate = occurrenceDate;
    }

    public bool IsMet() => _occurrenceDate >= _openingDate;

    public string Error => "The capsule cannot be opened before its opening date";
}
